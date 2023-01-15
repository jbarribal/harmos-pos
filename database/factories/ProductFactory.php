<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->words(1, true),
            'price' => $this->faker->randomFloat(2, 1, 50),
            'category' => $this->faker->randomElement(['Main', 'Side', 'Drink','Dessert']),
            'units' => $this->faker->randomNumber(2),
        ];
    }
}
