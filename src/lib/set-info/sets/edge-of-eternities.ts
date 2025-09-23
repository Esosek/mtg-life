import type { SetDetail } from '../set-details'

export const edgeOfEternities: SetDetail = {
  mechanics: [
    {
      name: 'Spacecraft',
      description: {
        en: "<b>Station</b> (Tap another creature you control: Put charge counters equal to its power on this Spacecraft) <b>Station</b> only as a sorcery. It's an artifact creature at X+.",
        cs: '<b>Station</b> (Tapni jinou bytost, kterou kontroluješ: Umísti na tuto kosmickou loď tolik nabitých žetonů, kolik je její síla) <b>Station</b> lze použít pouze jako sorcery. Je to artefaktová bytost pokud má X+ žetonů.',
      },
      examples: [
        'https://cards.scryfall.io/large/front/b/f/bf784de8-5ae2-4c07-92bb-a5b7f593b773.jpg?1755341417',
        'https://cards.scryfall.io/large/front/9/a/9ace282a-5901-4d36-ad21-17eb88bc5138.jpg?1755341422',
        'https://cards.scryfall.io/large/front/e/9/e94b130d-3547-43c5-a319-5ebc571c2e2d.jpg?1755341397',
      ],
    },
    {
      name: 'Planet',
      description: {
        en: '<b>Station</b> (Tap another creature you control: Put charge counters equal to its power on this Planet. <b>Station</b> only as a sorcery.)',
        cs: '<b>Station</b> (Tapni jinou bytost, kterou kontroluješ: Umísti na tuto planetu tolik nabitých žetonů, kolik je její síla) <b>Station</b> lze použít pouze jako sorcery.',
      },
      examples: [
        'https://tcgplayer-cdn.tcgplayer.com/product/641742_in_1000x1000.jpg',
        'https://cards.scryfall.io/large/front/c/6/c634273a-94b0-4104-9d10-ae522ece1fc7.jpg?1755341328',
      ],
    },
    {
      name: 'Warp',
      description: {
        en: '<b>Warp X</b> (You may cast this card from your hand for its warp cost. Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn.)',
        cs: '<b>Warp X</b> (Můžeš zahrát tuto kartu z ruky za její warp cenu. Na začátku konce kola vyžeň tuto bytost do vyhnanství, poté ji můžeš z vyhnanství zahrát v jakémkoliv dalším kole.)',
      },
      examples: [
        'https://cards.scryfall.io/large/front/1/b/1beb7566-305e-4091-bdc4-cf4c789ac05a.jpg?1752947281',
        'https://cards.scryfall.io/large/front/0/c/0cb8d8ce-329a-4a97-b3d8-796703ebcb37.jpg?1752946818',
        'https://cards.scryfall.io/large/front/3/4/34334971-c1b7-4506-a6dd-77f66b3ae4e7.jpg?1752946643',
      ],
    },
    {
      name: 'Void',
      description: {
        en: 'If a nonland permanent left the battlefield this turn or a spell was <b>warped</b> this turn.',
        cs: 'Pokud tento tah odešel z bojiště nonland permanent nebo bylo zahráno kouzlo pomocí <b>Warp</b>.',
      },
      examples: [
        'https://cards.scryfall.io/large/front/a/1/a1a1834b-76c2-4496-b8c5-18b69ab34c4c.jpg?1752947168',
        'https://cards.scryfall.io/large/front/c/e/cecb4936-14ca-49f9-b209-6519cab54b30.jpg?1752946935',
        'https://cards.scryfall.io/large/front/6/1/617038a8-0544-4d0e-8ff1-c786e60ecd59.jpg?1752947119',
      ],
    },
    {
      name: 'Lander Tokens',
      description: {
        en: '{2}, {T}, Sacrifice this token: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle.',
        cs: '{2}, {T}, Obětuj tento token: Vyhledej ve své knihovně základní zemi, dej jí na bojiště otočené, poté zamíchej knihovnu.',
      },
      examples: [
        'https://cards.scryfall.io/large/front/8/5/85ef1950-219f-401b-8ff5-914f9aaec122.jpg?1752946491',
        'https://cards.scryfall.io/large/front/8/5/85b898d2-050f-49a2-87af-07d54d105336.jpg?1752947308',
        'https://cards.scryfall.io/large/front/2/d/2dc7cc17-5319-4694-99c6-8c56a0b40a44.jpg?1752947156',
      ],
    },
  ],
  archetypes: [
    {
      colors: '{W}{U}',
      name: {
        en: 'Second Spell',
        cs: 'Druhé Kouzlo',
      },
      description: {
        en: 'Cast your second spell in a turn and earn additional bonuses to overwhelm your opponent.',
        cs: 'Zahraj svou druhou kartu v jednom tahu a získej další bonusy, kterými přemůžeš svého soupeře.',
      },
      keywords: {
        en: ['second spell in a turn', 'cheap spells'],
        cs: ['více kouzel v kole', 'levná kouzla'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/b/a/ba9f6d16-ee3e-4fbb-b78a-6292188eb61f.jpg?1752947501',
        'https://cards.scryfall.io/large/front/5/f/5f60b09d-9814-4a36-a57d-59b0e04c1c2f.jpg?1752946716',
        'https://cards.scryfall.io/large/front/a/b/abc83e0a-0ae5-4087-a751-058a1ba6a920.jpg?1752946778',
      ],
    },
    {
      colors: '{U}{B}',
      name: {
        en: 'Artifact Control',
        cs: 'Artefaktový Control',
      },
      description: {
        en: "Assemble an artifact-based deck to grind out your opponent's resources turn by turn.",
        cs: 'Sestav balíček založený na artefaktech, abys krok za krokem vyčerpával zdroje svého soupeře.',
      },
      keywords: {
        en: ['artifacts', 'card draw', 'control'],
        cs: ['artefakty', 'dobírání karet', 'control'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/3/4/349a2211-2b23-418d-a1ef-1c72ad2e171d.jpg?1752947420',
        'https://cards.scryfall.io/large/front/7/b/7bfb33b6-e2bf-498f-8c58-ae21a840cf75.jpg?1752946757',
        'https://cards.scryfall.io/large/front/5/b/5b2de056-5c27-44d6-871d-909411bd52dd.jpg?1752946852',
      ],
    },
    {
      colors: '{B}{R}',
      name: {
        en: 'Void',
      },
      description: {
        en: 'Use the <b>void</b> mechanic at the cost of creatures and artifacts—then trigger devastating events!',
        cs: 'Využij mechaniku <b>void</b> za cenu bytostí a artefaktů—poté spusť ničivé události!',
      },
      keywords: {
        en: ['void', 'sacrifice', 'artifacts'],
        cs: ['void', 'obětování', 'artefakty'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/1/9/198211af-f413-4e9b-9baf-4b4fcb81eadc.jpg?1752947458',
        'https://cards.scryfall.io/large/front/1/5/155dcf54-8fdb-4715-97dc-4eb5d3d80d78.jpg?1752947202',
        'https://cards.scryfall.io/large/front/a/1/a1a1834b-76c2-4496-b8c5-18b69ab34c4c.jpg?1752947168',
      ],
    },
    {
      colors: '{R}{G}',
      name: {
        en: 'Landers & Landfall',
      },
      description: {
        en: 'Use <b>Lander tokens</b> and <b>landfall</b> to create mana advantage. Landers can help to trigger landfall more easily!',
        cs: 'Využij <b>Lander tokeny</b> a <b>landfall</b> k vytvoření manové výhody. Lander tokeny ti mohou pomoci spouštět landfall snadněji!',
      },
      keywords: {
        en: ['lander tokens', 'landfall', 'mana ramp'],
        cs: ['lander tokeny', 'landfall', 'rampa'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/5/2/52498b7b-0389-4e7b-b29f-7ac86aab9229.jpg?1752947510',
        'https://cards.scryfall.io/large/front/8/5/85b898d2-050f-49a2-87af-07d54d105336.jpg?1752947308',
        'https://cards.scryfall.io/large/front/2/d/2dc7cc17-5319-4694-99c6-8c56a0b40a44.jpg?1752947156',
      ],
    },
    {
      colors: '{G}{W}',
      name: {
        en: '+1/+1 Counters',
        cs: '+1/+1 Žetony',
      },
      description: {
        en: "Boost your entire army with +1/+1 counters—stack'em up and watch the enemies fall.",
        cs: 'Posilni svou armádu pomocí +1/+1 žetonů—nahromaď je a sleduj zkomírající nepřátele.',
      },
      keywords: {
        en: ['+1/+1 counters', 'aggro'],
        cs: ['+1/+1 žetony', 'aggro'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/6/8/683d6eba-7f98-4105-b318-7f2290012f32.jpg?1752947448',
        'https://cards.scryfall.io/large/front/e/e/eeff069f-427b-42ad-afb1-36f0e547fb74.jpg?1752946598',
        'https://cards.scryfall.io/large/front/1/b/1beb7566-305e-4091-bdc4-cf4c789ac05a.jpg?1752947281',
      ],
    },
    {
      colors: '{W}{B}',
      name: {
        en: 'Go Wide',
        cs: 'Jdi Doširoka',
      },
      description: {
        en: 'Assemble the largest battlefield in the system and conquer your opponents with sheer numbers.',
        cs: 'Postav největší armádu ve vesmíru a dobyj své soupeře čistou přesilou!',
      },
      keywords: {
        en: ['tokens', 'aggro'],
        cs: ['tokeny', 'aggro'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/e/a/ea954205-5ff5-493b-bf30-6212042c2bc9.jpg?1752947509',
        'https://cards.scryfall.io/large/front/3/4/34334971-c1b7-4506-a6dd-77f66b3ae4e7.jpg?1752946643',
        'https://cards.scryfall.io/large/front/f/5/f5973fd3-d6bc-48f1-8a44-57d2a6dda228.jpg?1752946729',
      ],
    },
    {
      colors: '{U}{R}',
      name: {
        en: 'Artifact Aggro',
        cs: 'Artefaktové Aggro',
      },
      description: {
        en: "Play cheap artifacts you've uncovered on your travels to quickly overpower the field with supreme synergies.",
        cs: 'Využij levné artefakty, které jsi objevil na svých cestách, a rychle ovládni bojiště díky dokonalým synergiím!',
      },
      keywords: {
        en: ['artifacts', 'flying', 'aggro'],
        cs: ['artefakty', 'létání', 'aggro'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/5/5/5546c044-5826-48c3-9d28-866f3c3c5f2c.jpg?1752947461',
        'https://cards.scryfall.io/large/front/5/1/51077a54-15cf-4088-8e84-088d72e8e861.jpg?1752946745',
        'https://cards.scryfall.io/large/front/9/0/90209957-95db-4b59-979a-316d14ef876c.jpg?1752947160',
      ],
    },
    {
      colors: '{B}{G}',
      name: {
        en: 'Graveyard',
        cs: 'Hřbitov',
      },
      description: {
        en: 'Salvage long-forgotten ships and fallen warriors with a graveyard strategy that keeps coming back.',
        cs: 'Vzkřiž dávno zapomenuté lodě a padlé bojovníky pomocí hřbitovní strategie, která je stále vrací na bojiště!',
      },
      keywords: {
        en: ['graveyard', 'resurrection', 'self-mill'],
        cs: ['hřbitov', 'oživování', 'sebe-odemílací'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/1/a/1abc176f-2ccf-4371-b4b5-030dd99ff7fc.jpg?1752947486',
        'https://cards.scryfall.io/large/front/e/9/e94b130d-3547-43c5-a319-5ebc571c2e2d.jpg?1755341397',
        'https://cards.scryfall.io/large/front/a/7/a70d0877-1a1e-436b-bf8c-0ff6df9efc6a.jpg?1752947378',
      ],
    },
    {
      colors: '{R}{W}',
      name: {
        en: 'Space Stations',
        cs: 'Vesmírné Stanice',
      },
      description: {
        en: '<b>Station</b> your <b>Spacecrafts</b> by tapping creatures, then reap the rewards of your dedicated crew.',
        cs: 'Použij <b>Station</b> na své <b>kosmické lodě</b> tapnutím bytostí a poté se raduj se svou oddanou posádky.',
      },
      keywords: {
        en: ['spacecraft', 'tapping creatures', 'aggro'],
        cs: ['kosmické lodě', 'tapování bytostí', 'aggro'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/7/5/75c38cc9-07de-46d4-8195-f04b2b7e0fee.jpg?1752947477',
        'https://cards.scryfall.io/large/front/1/e/1e571246-aadc-4d1f-a284-9a529e150fe0.jpg?1752946702',
        'https://cards.scryfall.io/large/front/5/b/5bbce9fb-401f-4e78-acd5-9d3b506687fd.jpg?1755341407',
      ],
    },
    {
      colors: '{G}{U}',
      name: {
        en: 'Ramp',
        cs: 'Rampa',
      },
      description: {
        en: "Explore Sothera's furthest regions and worlds by controlling the largest monsters and ships in the system.",
        cs: 'Prozkoumej nejvzdálenější oblasti a světy Sothery ovládáním největších příšer a lodí v celém systému.',
      },
      keywords: {
        en: ['lander tokens', 'mana ramp', 'landfall'],
        cs: ['labder tokeny', 'rampa', 'landfall'],
      },
      signatureCards: [
        'https://cards.scryfall.io/large/front/7/e/7edcef2c-029c-46bd-bfeb-ff56a57dd63a.jpg?1752947428',
        'https://cards.scryfall.io/large/front/d/3/d3291c51-e963-4970-813d-9a06a47aa71e.jpg?1752947322',
        'https://cards.scryfall.io/large/front/0/c/0cb8d8ce-329a-4a97-b3d8-796703ebcb37.jpg?1752946818',
      ],
    },
  ],
}
