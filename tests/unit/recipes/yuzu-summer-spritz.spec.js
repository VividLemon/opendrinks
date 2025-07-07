// Test for Yuzu Summer Spritz recipe
describe('Yuzu Summer Spritz Recipe', () => {
  let recipe;

  beforeAll(() => {
    recipe = require('../../../src/recipes/yuzu-summer-spritz.json');
  });

  it('should have the correct name', () => {
    expect(recipe.name).toBe('Yuzu Summer Spritz');
  });

  it('should have Japanese and summer keywords', () => {
    expect(recipe.keywords).toContain('japanese');
    expect(recipe.keywords).toContain('summer');
  });

  it('should have sake as main spirit', () => {
    const sakeIngredient = recipe.ingredients.find(ing => 
      ing.ingredient.toLowerCase().includes('sake')
    );
    expect(sakeIngredient).toBeDefined();
    expect(sakeIngredient.quantity).toBe('2');
    expect(sakeIngredient.measure).toBe('oz');
  });

  it('should have yuzu for Japanese authenticity', () => {
    const yuzuIngredient = recipe.ingredients.find(ing => 
      ing.ingredient.toLowerCase().includes('yuzu')
    );
    expect(yuzuIngredient).toBeDefined();
  });

  it('should have refreshing summer ingredients', () => {
    const ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
    expect(ingredients).toEqual(
      expect.arrayContaining(['fresh mint', 'sparkling water', 'cucumber slice', 'ice cubes'])
    );
  });

  it('should have proper directions for preparation', () => {
    expect(recipe.directions).toHaveLength(7);
    expect(recipe.directions[0]).toContain('ice cubes');
    expect(recipe.directions[1]).toContain('muddle');
    expect(recipe.directions[1]).toContain('mint');
  });

  it('should be tagged as vegan and low-alcohol', () => {
    expect(recipe.keywords).toContain('vegan');
    expect(recipe.keywords).toContain('low-alcohol');
  });

  it('should have a valid image reference', () => {
    expect(recipe.image).toBe('yuzu-summer-spritz.jpg');
  });

  it('should have a proper description', () => {
    expect(recipe.description).toContain('Japanese');
    expect(recipe.description).toContain('summer');
    expect(recipe.description).toContain('yuzu');
  });
});