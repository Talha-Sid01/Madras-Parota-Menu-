Use the uploaded menu PDF as the PRIMARY DESIGN REFERENCE.

Do NOT redesign it from scratch.

Instead, transform it into an award-winning premium South Indian heritage restaurant menu while preserving the existing visual identity.

═══════════════════════════════════════════════

STRICTLY PRESERVE

• Existing logo exactly
• Existing background colours
• Existing emerald green palette
• Existing gold palette
• Existing temple borders
• Existing menu cards
• Existing typography style
• Existing menu categories
• Existing menu items
• Existing prices
• Existing descriptions
• Existing page layout
• Existing artistic direction

Do not replace or simplify the approved design.

Only enhance it.

═══════════════════════════════════════════════

DESIGN STYLE

The menu should look like a combination of

• Traditional South Indian Heritage
• Chettinad Architecture
• Temple Art
• Premium Luxury Restaurant
• Hand-painted Storybook
• Disney/Pixar Illustration
• Michelin-Star Restaurant Branding
• Premium Editorial Magazine

Avoid generic AI artwork.

Avoid clipart.

Avoid flat illustrations.

Everything should feel handcrafted.

═══════════════════════════════════════════════

CREATE A SOUTH INDIAN STORY

Every page should tell a different story.

PAGE 1

Traditional South Indian Master Chef preparing fresh flaky parota on a hot cast iron tawa.

Warm morning sunlight entering through carved temple windows.

Fresh dough.

Flying flour.

Fresh curry leaves.

Clay pots.

Brass utensils.

Banana leaf.

Traditional spice box.

Firewood stove.

The aroma should almost feel visible.

═══════════════════════════════════════════════

PAGE 2

Authentic Chettinad kitchen.

Chef cooking Chicken 65.

Pepper Mutton.

Chettinad Sukka.

Garlic Chicken.

Ginger Chicken.

Traditional brass kadai.

Stone grinder.

Fresh curry leaves.

Flying spices.

Steam.

Banana leaves.

Temple bells.

Clay cookware.

Copper vessels.

Warm lighting.

═══════════════════════════════════════════════

PAGE 3

Traditional South Indian breakfast experience.

Fresh Idli.

Vada.

Neer Dosa.

Kothu Parota.

Large banana leaf serving.

Brass filter coffee.

Happy family atmosphere.

Palm trees.

Kolam artwork.

Flower garlands.

Morning sunshine.

Traditional wooden furniture.

═══════════════════════════════════════════════

PAGE 4

South Indian street food celebration.

Golden crispy dosa.

Uttappam.

Filter Coffee.

Fresh coconut.

Banana leaf plates.

Brass tumblers.

Temple architecture.

Traditional village ambience.

Festive lighting.

═══════════════════════════════════════════════

CREATE A FAMILY OF RECURRING MASCOTS

The illustrations should create a memorable brand identity.

Characters

Master Chef Anna

Traditional Tamil chef

White veshti

Gold border angavastram

Traditional chef cap

Large curled moustache

Warm smile

Flipping giant flaky parota dramatically.

Grandmother Amma

Traditional Tamil grandmother

Grinding masala

Preparing dosa batter

Serving food lovingly.

Little Idli Twins

Cute smiling idlis

Playing together

Wrapped inside banana leaf.

Happy Vada

Floating happily inside sambar.

King Biryani

Golden biryani pot

Royal spice crown

Rich aromatic steam.

Parota Hero

Stretching flaky layers

Action pose

Flying flour.

Filter Coffee Uncle

Traditional brass tumbler

Warm expressive eyes

Rich coffee steam.

Curry Leaf Fairy

Tiny magical curry leaves

Flying around pages.

Pepper Brothers

Cute pepper mascots

Carrying spice sacks.

Mustard Seed Friends

Tiny smiling mustard seeds.

Brass Kadai

Animated smiling kadai

Cooking Chicken 65.

═══════════════════════════════════════════════

FOOD ART

Create premium food illustrations with realistic textures.

Golden flaky Kerala Parota

Crispy Dosa

Chettinad Chicken Sukka

Pepper Mutton

Chicken 65

Garlic Chicken

Ginger Chicken

Chicken Chilli Parota

Kalakki Egg

Kothu Parota

Idli

Vada

Filter Coffee

Sambar

Coconut Chutney

Biryani

Everything should look freshly cooked with visible steam and rich textures.

═══════════════════════════════════════════════

TRADITIONAL DECOR

Blend naturally into the existing background.

Temple pillars

Chettinad wooden carvings

Brass hanging lamps

Kolam floor patterns

Banana trees

Coconut trees

Palm leaves

Flower garlands

Terracotta pots

Clay cooking pots

Traditional spice boxes

Stone grinder

Wooden serving trays

Copper vessels

Temple bells

Fresh herbs

Whole spices

Fresh curry leaves

Everything should feel authentic.

═══════════════════════════════════════════════

COMPOSITION

This is extremely important.

Do NOT cover menu cards.

Do NOT place artwork behind text.

Do NOT crop characters.

Do NOT crop food.

Do NOT hide mascot faces.

No illustration should interfere with readability.

Large artwork must stay in margins only.

Menu cards remain the primary focus.

Maintain at least 60px breathing space around every menu section.

═══════════════════════════════════════════════

VISUAL QUALITY

Hyper detailed.

8K.

Ultra HD.

300 DPI.

Professional print quality.

Premium restaurant branding.

Editorial magazine quality.

Luxury colour grading.

Warm cinematic lighting.

Volumetric sunlight.

Soft shadows.

Perfect anatomy.

Perfect food textures.

No AI artifacts.

No blurry faces.

No distorted hands.

No duplicated objects.

═══════════════════════════════════════════════

FINAL RESULT

The finished menu should feel like entering an authentic luxury South Indian restaurant in Chettinad, where tradition, hospitality, handcrafted cooking, and vibrant culture come alive.

The design should be artistic, immersive, culturally rich, premium, elegant, highly memorable, and worthy of being photographed and shared, while preserving every existing menu item, price, description, logo, colour palette, and approved background exactly as in the reference PDF.import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
