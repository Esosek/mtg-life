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
    //  {
    //   colors: '{U}{B}',
    //   name: '',
    //   description: {
    //     en: '',
    //     cs: '',
    //   },
    //   keywords: {
    //     en: [],
    //     cs: [],
    //   },
    //   signatureCards: [
    //   ],
    // },
  ],
}
