import { Performer } from "../../domain/models/performer/performer";
import { Instrument } from "../../domain/models/instrument/instrument";
import { Song } from "../../domain/models/song/song";

export const _db: {
    instruments: Instrument[];
    performers: Performer[];
    songs: Song[];
} = {
    instruments: [
        { id: "1", name: "Guitar", type: "Strings" },
        { id: "2", name: "Ukulele", type: "Strings" },
        { id: "3", name: "Piano", type: "Keys" },
        { id: "4", name: "Drums", type: "Percussion" },
        { id: "5", name: "Voice", type: "Wind,Strings" },
    ],
    performers: [
        { id: "1", name: "Bernard", age: 70, genre: "Classic", instruments_ids: ["3"] },
        { id: "2", name: "Daniel", age: 26, genre: "Pop,Rock,HeavyMetal", instruments_ids: ["1", "5"] },
        { id: "3", name: "Lilian", age: 40, genre: "Romantic", instruments_ids: ["3", "5"] },
        { id: "4", name: "David", age: 26, genre: "Salsa", instruments_ids: ["1", "3"] },
        { id: "5", name: "Matheus", age: 26, genre: "HeavyMetal", instruments_ids: ["1", "4", "3"] },
        { id: "6", name: "Rainsha", age: 25, genre: "Pop,Rock,Ballads", instruments_ids: ["5"] },
        { id: "7", name: "Sarah", age: 28, genre: "Jazz,Blues,Country,Ballads", instruments_ids: ["2", "5"] },
        { id: "8", name: "John Rambo", age: 26, genre: "Pop,Rock", instruments_ids: ["3"] },
    ],
    songs: [
        { id: "1", name: "Moonlight Sonata", genre: "Classic", performer_id: '1' },
        { id: "2", name: "Saltarello", genre: "Classic,Medieval", performer_id: '1' },
        { id: "3", name: "Bard's Song", genre: "HeavyMetal", performer_id: '2' },
        { id: "4", name: "Mariposa Submarina", genre: "Romantic", performer_id: '3' },
        { id: "5", name: "El Preso", genre: "Salsa", performer_id: '4' },
        { id: "6", name: "Toxicity", genre: "HeavyMetal", performer_id: '5' },
        { id: "7", name: "Bailar Contigo", genre: "Pop,Rock,Ballads", performer_id: '6' },
        { id: "8", name: "Over The Rainbow", genre: "Ballads", performer_id: '7' },
        { id: "9", name: "Radioactive", genre: "Rock,Electornic", performer_id: '8' },
    ],
};
