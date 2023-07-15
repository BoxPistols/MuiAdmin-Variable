import random
import json
from faker import Faker

fake = Faker('ja_JP')


def generate_product():
    return {
        "id": fake.unique.random_number(digits=3),
        "company": fake.company(),
        'nama': fake.name(),
        'mail': fake.email(),
        'tel': fake.phone_number(),
        'address': fake.address(),
        "price": round(random.uniform(500, 5000), 2),
        "sale": random.choice(["工業用ロボット", "高圧洗浄機", "省エネLED照明", "自動化機器"]),
        "status": random.choice([True, False]),
    }


# Generate 100 products
products = [generate_product() for _ in range(21)]

# Write the products to a JSON file
with open("../../public/data/basic.json", "w", encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False)
