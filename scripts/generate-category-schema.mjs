import { updateCategorySchema } from './lib/category-schema.ts';
await updateCategorySchema(process.cwd());
console.log('Category autocomplete schema is current.');
