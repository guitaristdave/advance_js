const albumIteratorSymbol = Symbol.iterator;

const musicCollection = {
  albums: [
    {
      title: "System of a Down",
      artist: "System of a Down",
      year: "1998",
    },
    {
      title: "Toxicity",
      artist: "System of a Down",
      year: "2001",
    },
    {
      title: "Steal This Album!",
      artist: "System of a Down",
      year: "2002",
    },
    {
      title: "Mezmerize",
      artist: "System of a Down",
      year: "2005",
    },
    {
      title: "Hypnotize",
      artist: "System of a Down",
      year: "2005",
    },
    {
      title: "Scars on Broadway",
      artist: "Scars on Broadway",
      year: "2008",
    },
    {
      title: "Dictator",
      artist: "Scars on Broadway",
      year: "2018",
    },
    {
      title: "Elect the Dead",
      artist: "Serj Tankian",
      year: "2007",
    },
    {
      title: "Imperfect Harmonies",
      artist: "Serj Tankian",
      year: "2010",
    },
    {
      title: "Harakiri",
      artist: "Serj Tankian",
      year: "2012",
    },
  ],
  [albumIteratorSymbol]: function () {
    let index = 0;

    return {
      next: () => {
        return index < this.albums.length
          ? { value: this.albums[index++], done: false }
          : { done: true };
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
