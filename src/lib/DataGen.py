import random
import json
from faker import Faker

# Create a Faker instance
fake = Faker('ja_JP')

# Define a function to generate a random product


def generate_product():
    return {
        "id": fake.unique.random_number(digits=5),
        "title": fake.catch_phrase(),
        "description": fake.sentence(),
        "price": round(random.uniform(500, 5000), 2),
        "discountPercentage": round(random.uniform(0, 30), 2),
        "rating": round(random.uniform(0, 5), 2),
        "stock": random.randint(0, 100),
        "brand": fake.company(),
        "category": random.choice(["ハイブリッド", "バン", "セダン", "SUV", "クーペ"]),
        "thumbnail": fake.image_url(),
        "images": [fake.image_url() for _ in range(5)],
        "active": random.choice([True, False]),
    }


# Generate 100 products
products = [generate_product() for _ in range(100)]

# Write the products to a JSON file
with open("../../public/data/products.json", "w", encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False)
