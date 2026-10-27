import os
import json
import re
from PIL import Image, ImageFile

ImageFile.LOAD_TRUNCATED_IMAGES = True

SRC_BASE = r"C:\Users\divya\Downloads\shyambaba\website"
DEST_BASE = r"public\images\catalog"
OUTPUT_JSON = r"src\data\catalog.json"

os.makedirs(DEST_BASE, exist_ok=True)
os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)

# Category definitions
CATEGORY_META = {
    "Bangels": {
        "slug": "bangles",
        "aliases": ["bangels"],
        "name": "Bangles",
        "description": "Handcrafted American Diamond & Antique Brass Bangles at Factory Rates",
        "has_subcategories": True,
        "subs": {
            "American Diamond bangels": {
                "slug": "american-diamond-bangles",
                "name": "American Diamond Bangles",
                "description": "Sparkling American Diamond Brass Bangles for Boutiques & Resellers"
            },
            "Antique bangels": {
                "slug": "antique-bangles",
                "name": "Antique Bangles",
                "description": "Traditional Antique Gold & Matte Finish Bangles Direct from Jaipur"
            }
        }
    },
    "Bracelet": {
        "slug": "bracelets",
        "aliases": ["bracelet"],
        "name": "Bracelets",
        "description": "Designer Diamond, Kundan & Western Bracelets at Wholesale Manufacturer Prices",
        "has_subcategories": True,
        "subs": {
            "Diamond bracelet": {
                "slug": "diamond-bracelets",
                "name": "Diamond Bracelets",
                "description": "Premium CZ & American Diamond Daily Wear Bracelets"
            },
            "Kundan loose Bracelets": {
                "slug": "kundan-loose-bracelets",
                "name": "Kundan Loose Bracelets",
                "description": "Handmade Jadau & Kundan Adjustable Bracelets"
            },
            "Western Bracelet": {
                "slug": "western-bracelets",
                "name": "Western Bracelets",
                "description": "Chic & Modern Western Design Brass Bracelets"
            }
        }
    },
    "Earrings": {
        "slug": "earrings",
        "aliases": ["all-earrings"],
        "name": "Earrings",
        "description": "Jaipur's Largest Manufacturer of Brass, Kundan, Oxidised & Meenakari Earrings",
        "has_subcategories": True,
        "subs": {
            "American Diamond Earrings": {
                "slug": "american-diamond-earrings",
                "name": "American Diamond Earrings",
                "description": "High-Sparkle AD & CZ Party Wear Earrings"
            },
            "Daily wear Oxydised earrings": {
                "slug": "daily-wear-oxydised-earrings",
                "name": "Daily Wear Oxidised Earrings",
                "description": "Lightweight Antique Silver & Black Metal Jhumkas and Tops"
            },
            "Kashmiri Earrings": {
                "slug": "kashmiri-earrings",
                "name": "Kashmiri Earrings",
                "description": "Authentic Kashmiri Hanging Jhumkis with Pearl Drops"
            },
            "Kundan studs": {
                "slug": "kundan-studs",
                "name": "Kundan Studs & Tops",
                "description": "Elegant Kundan Floral and Geometric Ear Studs"
            },
            "Meenakari Earrings": {
                "slug": "meenakari-earrings",
                "name": "Meenakari Earrings",
                "description": "Vibrant Enamel Painted Traditional Rajasthani Meenakari"
            },
            "Monalisa Oxydised earrings": {
                "slug": "monalisa-oxydised-earrings",
                "name": "Monalisa Oxidised Earrings",
                "description": "Dual-Tone Monalisa Stone Accented Oxidised Earrings"
            },
            "Mother of pearl": {
                "slug": "mother-of-pearl",
                "name": "Mother of Pearl Earrings",
                "description": "Natural Mother of Pearl (MOP) Lustrous Statement Earrings"
            },
            "Victorian earrings": {
                "slug": "victorian-earrings",
                "name": "Victorian Heritage Earrings",
                "description": "Royal Victorian Finish Antique Polish Designer Earrings"
            }
        }
    },
    "Kanchain": {
        "slug": "kanchain",
        "aliases": ["ear-chain", "ear-chains"],
        "name": "Kanchain (Ear Chains)",
        "description": "Handcrafted Pearl & Kundan Ear Support Chains for Heavy Earrings",
        "has_subcategories": False
    },
    "Kundan pendants": {
        "slug": "kundan-pendants",
        "aliases": ["pendants"],
        "name": "Kundan Pendants",
        "description": "Royal Rajasthani Kundan Pendants for Necklaces and Chains",
        "has_subcategories": False
    },
    "Kundan Tika": {
        "slug": "kundan-tika",
        "aliases": ["tika", "maang-tika"],
        "name": "Kundan Tika",
        "description": "Festive and Bridal Jaipuri Kundan Maang Tika Designs",
        "has_subcategories": False
    },
    "Mangalsutra": {
        "slug": "mangalsutra",
        "aliases": ["mangalsutras"],
        "name": "Mangalsutra",
        "description": "Contemporary & Heritage Black Bead Brass Mangalsutras",
        "has_subcategories": False
    },
    "Necklace": {
        "slug": "necklaces",
        "aliases": ["necklace"],
        "name": "Necklaces",
        "description": "Royal Jaipuri Chokers, Bridal Sets & Ethnic Necklaces at Factory Rates",
        "has_subcategories": True,
        "subs": {
            "Delicate Ethnic Necklace": {
                "slug": "delicate-ethnic-necklace",
                "name": "Delicate Ethnic Necklaces",
                "description": "Graceful Minimalist Festive & Everyday Ethnic Necklaces"
            },
            "Kundan choker": {
                "slug": "kundan-choker",
                "name": "Kundan Chokers",
                "description": "Heavy Bridal and High-Neck Kundan Choker Sets"
            },
            "MOP Sets": {
                "slug": "mop-sets",
                "name": "Mother of Pearl (MOP) Sets",
                "description": "Exquisite Natural MOP Stone Necklace & Earring Combinations"
            },
            "Party wear Necklace": {
                "slug": "party-wear-necklace",
                "name": "Party Wear Necklaces",
                "description": "Glamorous Contemporary Evening Party Wear Sets"
            },
            "Sabyasachi Inspired Necklace": {
                "slug": "sabyasachi-inspired-necklace",
                "name": "Sabyasachi Inspired Necklaces",
                "description": "Heritage Heritage Royal Sabyasachi Aesthetic Bridal Sets"
            },
            "Victoria Necklace": {
                "slug": "victoria-necklace",
                "name": "Victorian Heritage Necklaces",
                "description": "Antique Victorian Polished Chokers and Long Sets"
            }
        }
    },
    "Rings": {
        "slug": "rings",
        "aliases": ["finger-rings"],
        "name": "Finger Rings",
        "description": "Adjustable Statement Kundan, Polki & American Diamond Finger Rings",
        "has_subcategories": True,
        "subs": {
            "Diamond rings": {
                "slug": "diamond-rings",
                "name": "Diamond Finger Rings",
                "description": "Sparkling American Diamond Adjustable Rings"
            },
            "Kundan rings": {
                "slug": "kundan-rings",
                "name": "Kundan Statement Rings",
                "description": "Big Bold Royal Kundan Statement Cocktail Rings"
            }
        }
    },
    "Tika earrings combo": {
        "slug": "tika-earrings-combo",
        "aliases": ["tika-combo", "tika-earring-sets"],
        "name": "Tika & Earrings Combo",
        "description": "Coordinated Maang Tika and Jhumka/Earring Sets for Weddings",
        "has_subcategories": False
    }
}

def clean_code(filename):
    # Take stem before extension
    stem, _ = os.path.splitext(filename)
    # If it's a GUID like 12ADAFAC-DF41-4264-9D4E-C44B6405525E
    # We display clean code e.g. 12ADAFAC or first 8-10 chars
    parts = stem.split('-')
    if len(parts) >= 2:
        return f"SB-{parts[0][:8].upper()}"
    return f"SB-{stem[:8].upper()}"

def process_image(src_path, dest_path):
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
        return True
    try:
        with Image.open(src_path) as im:
            im = im.convert('RGB')
            im.thumbnail((900, 900), Image.Resampling.LANCZOS)
            im.save(dest_path, 'JPEG', quality=82, optimize=True)
            return True
    except Exception as e:
        print(f"Warning: could not process {src_path}: {e}")
        return False

def main():
    catalog = []
    print("Starting catalog import and image processing...")

    for folder_name, meta in CATEGORY_META.items():
        cat_path = os.path.join(SRC_BASE, folder_name)
        if not os.path.exists(cat_path):
            print(f"Skipping {folder_name}, path does not exist")
            continue

        cat_slug = meta["slug"]
        cat_dest = os.path.join(DEST_BASE, cat_slug)
        os.makedirs(cat_dest, exist_ok=True)

        cat_obj = {
            "slug": cat_slug,
            "aliases": meta.get("aliases", []),
            "name": meta["name"],
            "description": meta["description"],
            "hasSubcategories": meta["has_subcategories"],
            "coverImage": "",
            "totalItems": 0,
        }

        if meta["has_subcategories"]:
            cat_obj["subcategories"] = []
            for sub_folder, sub_meta in meta["subs"].items():
                sub_path = os.path.join(cat_path, sub_folder)
                if not os.path.exists(sub_path):
                    continue
                sub_slug = sub_meta["slug"]
                sub_dest = os.path.join(cat_dest, sub_slug)
                os.makedirs(sub_dest, exist_ok=True)

                raw_files = sorted([f for f in os.listdir(sub_path) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))])
                sub_images = []

                for idx, f in enumerate(raw_files):
                    src_file = os.path.join(sub_path, f)
                    dest_file_name = f"{sub_slug}-{idx+1:03d}.jpg"
                    dest_file = os.path.join(sub_dest, dest_file_name)
                    process_image(src_file, dest_file)

                    web_path = f"/images/catalog/{cat_slug}/{sub_slug}/{dest_file_name}"
                    code = clean_code(f)

                    sub_images.append({
                        "id": f"{sub_slug}-{idx+1}",
                        "code": code,
                        "rawFilename": f,
                        "src": web_path,
                    })

                cover = sub_images[0]["src"] if sub_images else ""
                cat_obj["subcategories"].append({
                    "slug": sub_slug,
                    "name": sub_meta["name"],
                    "description": sub_meta["description"],
                    "parentSlug": cat_slug,
                    "parentName": meta["name"],
                    "coverImage": cover,
                    "itemCount": len(sub_images),
                    "images": sub_images
                })
                cat_obj["totalItems"] += len(sub_images)

            if cat_obj["subcategories"]:
                cat_obj["coverImage"] = cat_obj["subcategories"][0]["coverImage"]

        else:
            # Direct images category
            raw_files = sorted([f for f in os.listdir(cat_path) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))])
            cat_images = []

            for idx, f in enumerate(raw_files):
                src_file = os.path.join(cat_path, f)
                dest_file_name = f"{cat_slug}-{idx+1:03d}.jpg"
                dest_file = os.path.join(cat_dest, dest_file_name)
                process_image(src_file, dest_file)

                web_path = f"/images/catalog/{cat_slug}/{dest_file_name}"
                code = clean_code(f)

                cat_images.append({
                    "id": f"{cat_slug}-{idx+1}",
                    "code": code,
                    "rawFilename": f,
                    "src": web_path,
                })

            cat_obj["images"] = cat_images
            cat_obj["totalItems"] = len(cat_images)
            cat_obj["coverImage"] = cat_images[0]["src"] if cat_images else ""

        catalog.append(cat_obj)
        print(f"Processed category: {meta['name']} -> {cat_obj['totalItems']} images")

    with open(OUTPUT_JSON, "w", encoding="utf-8") as out:
        json.dump(catalog, out, indent=2, ensure_ascii=False)

    print(f"Catalog JSON saved successfully with {len(catalog)} categories to {OUTPUT_JSON}!")

if __name__ == "__main__":
    main()
