import { generate } from 'openapi-typescript-codegen';

await generate({
  input: '../Backend/Violino-server/api/openapi/openapi.yaml',
  output: './src/shared/api/generated',
  client: 'fetch',
  useOptions: true,
  useUnionTypes: false,
  exportCore: true,
  exportModels: true,
  exportSchemas: false,
  exportServices: true,
});

console.log('OpenAPI client generated in src/shared/api/generated');
