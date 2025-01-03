import { createFilter } from 'vite';

export function compilerVitePlugin() {
  const filter = createFilter('**/*.cat');

  return {
    name: 'vite-plugin-cat',
    enforce: 'pre',

    resolveId(id) {
      if (filter(id)) {
        return id; // Ensure .cat files are handled
      }
    },

    load(id) {
      if (!filter(id)) return;

      // Placeholder to indicate the file is handled by the plugin
      return '';
    },

    transform(code, id) {
      if (!filter(id)) return;

      const scriptMatch = code.match(/<script.*?>([\s\S]*?)<\/script>/im);
      const templateMatch = code.match(/<template.*?>([\s\S]*?)<\/template>/im);

      const scriptContent = scriptMatch ? scriptMatch[1].trim() : '';
      const templateContent = templateMatch ? templateMatch[1].trim() : '';

      if (!scriptContent && !templateContent) {
        console.error(`Invalid .cat file format in "${id}":\n`, code);
        throw new Error(`.cat file at "${id}" must contain at least one <script> or <template> tag.`);
      }

      return `
    ${scriptContent}
    const template = \`${templateContent}\`;
    export const appHtml = template;
      `;
    },

    handleHotUpdate({ file, server, read }) {
      if (!filter(file)) return;

      // Read the updated file
      const content = read();

      const match = content.match(/<script.*?>([\s\S]*?)<\/script>[\s\S]*?<template.*?>([\s\S]*?)<\/template>/im);

      if (!match) {
        console.warn(
          `.cat file at "${file}" must contain both <script> and <template> tags for HMR to work correctly.`
        );
      }

      // Extract updated script and template
      const scriptContent = match[1].trim();
      const templateContent = match[2].trim();

      // Push HMR update
      server.ws.send({
        type: 'update',
        updates: [
          {
            type: 'js-update',
            path: file,
            acceptedPath: file,
            timestamp: Date.now()
          }
        ]
      });

      // Return new content to re-transform the file
      return `
        ${scriptContent}
        const template = \`${templateContent}\`;
        export const appHtml = template;
      `;
    }
  };
}

export default compilerVitePlugin;
