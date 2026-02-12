import { Poem, ThemeConfig, Emotion, MoodOption } from './types';

export const POEMS: Poem[] = [
  {
    title: "Flicker Within",
    preview: "The light in his eyes once shimmered like dawn...",
    body: `The light in his eyes once shimmered like dawn,
A pure, burning glow that could carry the stars on.

But the world, with its weight, slowly drew in so near,
Casting shadows where brilliance had once been so clear.

He danced with the time, in a rhythm of grace,
But somewhere, somehow, he lost his own place.
The world whispered doubts, fed him fears through the years,
Till the light in his eyes disappeared with his tears.

Yet in the quiet, a flicker remains,
A strong, living spark that survives all the rains.
For though the world took his light far away,
It still lingers deep within, awaiting the day.`,
    category: "Reflection",
    date: "2024-09-08",
    emotion: "Reflective"
  },
  {
    title: "Moonlit Dreams",
    preview: "Under the moon's soft, silver gleam...",
    body: `Under the moon's soft, silver gleam,
A world awakens in a quiet dream.
I find myself in shadows deep,
Where secrets of the soul I keep.

The moon, a keeper of the old,
Whispers tales that are untold.
And in its tender, hallowed light,
A new tomorrow dawns from night.`,
    category: "Dreams",
    date: "2024-10-10",
    emotion: "Dreams"
  },
  {
    title: "Khwaabon Ka Intezaar",
    preview: "Intezaar ke har lamhon mein usse paane ki ummeed hai...",
    body: `Intezaar ke har lamhon mein
usse paane ki ummeed hai
Khwaabon ka jaadoo usi pe chale
jo dil ke kareeb hai

Paas ho kar bhi sach keh na sakein,
Ab yaadon mein yeh khwaab adhura sa lagne lage hain
Chahat aisi ki khwaabon mein uske saath rahein,
Par khud pe aitbaar na tha, isliye hum khamosh rahe

Kehte hain khwaabon mein sochi hui baatein sach ho jaati hain,
Par meri neendon ne un jhalakon ko kabhi mehsoos na kiya,
Raat bhar teri tasveer aankhon tale
halki si parchhaayi chhod jaati hai,
Aur subah ki pehli kiran bhi
bas nami ke saath khamosh ho jaati hai`,
    category: "Love",
    date: "2025-05-01",
    emotion: "Love"
  },
  {
    title: "Uski Parchhayi",
    preview: "Shaam dhalti thi uske naam pe, raatein uski baaton mein rehti...",
    body: `Shaam dhalti thi uske naam pe, raatein uski baaton mein rehti,
Chand bhi poochhta tha aksar, kiski kami thi jo aankhon mein nami rehti.

Zindagi chalte chalte kahin uske raaste pe ruk gayi thi,
Aur hum… har khushi mein uski parchhayi dhoondte chalte the.`,
    category: "Longing",
    date: "2025-06-11",
    emotion: "Longing"
  },
  {
    title: "Chhupi Hui Udaan",
    preview: "Kabhi Khwaabon mein jeeta, toh kabhi canvas rangin tha...",
    body: `Kabhi Khwaabon mein jeeta, toh kabhi canvas rangin tha,
Kuch alfaazon mein chhupi thi duniya, kuch sketch lines mein mann talleen tha.
Padhne ka junoon tha, likhne ki aadat thi,
Uski muskurahat mein bhi kabhi apni chahat thi.

Lekin ab toh sab dhundhla sa lagta hai,
Dil ke kone mein bacha hua junoon bhi chhupa rehta hai.
Kabhi socha tha marks badhenge, log pehchaanenge kaam,
Par na number badhe, na naam ...lagta hai, bekhaar gaye saare armaan.

Umar toh keh rahi...."abhi toh waqt hai udne ka,"
Par hausla kahin gira pada hai, khud se hi chhupa pada.`,
    category: "Reflective",
    date: "2025-06-17",
    emotion: "Melancholy"
  },
  {
    title: "Maybe That Means Something",
    preview: "I used to smile like everything was fine....",
    body: `I used to smile like everything was fine....
Too easy, like a coin flipped heads so often it forgot tails.
Was that strength?
Survival?
Probably both.
Probably neither.

I was the kid who stayed up late....
Not for grades, not just for tests,
But because silence felt safer than sleep:
The hum of a fan, the glow of a screen,
Lines of code like small loyalties....
I’d tweak, I’d tinker,
Not to build the world, just to steady my hands.

I made art in secret....
Sketches in the margins... whole lives in pencil.
Drawing was breathing when the world got loud.
And anime...
Wasn’t just comfort, it was recognition:
Underdogs who scarred and still stood,
Dreamers who bled and kept going,
Stories that said pain could mean something,
That love could be seen.

I wasn’t special. Just quiet....
Quiet can be loud in its own way.
I had a little light, a private map,
A version of me that still believed.

Then came the decision:
PCMB.... a stream on paper, a river I couldn’t hold,
Currents pulling, twisting, carving paths I didn’t know.

I told myself I could carry it....
Pressure pooled like ink in veins,
Thick, slow, unstoppable,
Seeping into every corner of me,
Whispering the same small verdict: you’re not enough.

Everyone else read numbers. Percentages. Proof.
They called it worth.... and walked away.
No one asked why my smile stopped reaching my eyes.
If someone had asked, I wouldn’t have known the words anyway.

Stopping felt like failure....
Failure felt like erasing what little I had left.
So I kept going.... hollow and obedient.

Then she came....
She didn’t know she was a soft war.
Sat beside me.... calm, warm, like a lullaby in a room of alarms.
I didn’t want anything.
Just proximity....
Just presence....
Just to exist in her orbit.

I studied harder.... just to explain better,
Because when she said “thank you,”
It wasn’t small.... it was a lighthouse in my chest.

She didn’t save me.... she reminded me I could be seen.
That was enough to pull me back, for a moment.

Then everything cracked.... The system shifted.
Pressure turned petty.... competition into cruelty.
I poured time, mind, sleep, into the well.
I broke things no one will ever see.
And for what?

I didn’t qualify....
Didn’t pass the gate....
Didn’t matter.

She kept moving.... bright, steady.... a star I could name but never touch.
And I stayed.... behind.... in ink and in spirit.
The boy who painted in color now scrolls in grayscale.
My sketchbook.... once a universe.... gathers dust.
I can’t finish an episode.... I watch winners and it hurts,
Because every victory is a mirror that says: not you.

Now I float through days I don’t own....
Hours I can’t remember buying.
I don’t live.... I pass time, like a ghost with a schedule.
Silence isn’t quiet.... it’s a chorus that fills my chest,
Says I’ve already lost.... maybe I was never enough.

Regret is a shadow that learned to follow my footsteps....
I should’ve spoken.... I should’ve guarded that smaller boy,
The one who felt too much and still chose to care.

Mirror me now.... hollow eyes, a candle burned low.
Once they burned.... now they only flicker.
No one’s coming to rescue me.... Not her, not a rewind, not a miracle.
It’s on me.... always was.... and that doesn’t make it easier.

Knowing the load doesn’t lift it....
Wanting to rise doesn’t move tired legs....
Hope is heavy when hands can’t hold it....
Memories coil like vines around my ribs....
Her smile, the exams, the almosts, the what-ifs....
They tighten with every breath.

And I keep asking.... quietly.... the same hard questions:
Can I come back?
Can I be enough again?
Can I rebuild from this ruin?
Can I forgive myself?
Do I even want to?

I don’t know.... Not yet.
But I am still here....
And maybe.... maybe that means something.`,
    category: "Reflective",
    date: "2025-08-05",
    emotion: "Melancholy"
  },
  {
    title: "Whispers of Autumn",
    preview: "The air grows crisp, the sun turns gold...",
    body: `The air grows crisp, the sun turns gold,
A final story, softly told.
Each leaf, a memory, breaks its hold,
And whispers truths from seasons old.
We watch them fall, a silent cast,
Believing nothing beautiful can last.

Yet deep within this gentle fall,
A different truth begins to call.
The quiet hope of what's to be,
A lesson in mortality.
For spring awaits to set things right,
And bring our spirits back to light.`,
    category: "Nature",
    date: "2025-08-21",
    emotion: "Nature"
  }
];

export const MOODS: MoodOption[] = [
  { id: 'All', label: 'Ether', description: 'The void' },
  { id: 'Love', label: 'Pulse', description: 'Heartbeat' },
  { id: 'Melancholy', label: 'Shadow', description: 'Deep water' },
  { id: 'Dreams', label: 'Astral', description: 'Starlight' },
  { id: 'Nature', label: 'Bloom', description: 'Earth' },
];

export const THEMES: Record<string, ThemeConfig> = {
  All: {
    base: '#030303',
    accent: '#e2e8f0', // Slate 200
    background: 'bg-black',
    text: 'text-white',
    secondary: 'text-neutral-400',
    gradient: 'from-neutral-900 via-stone-900 to-black',
    particleColor: 'rgba(255, 255, 255, 0.3)'
  },
  Love: {
    base: '#1a0508',
    accent: '#fb7185', // Rose 400
    background: 'bg-rose-950',
    text: 'text-rose-50',
    secondary: 'text-rose-300',
    gradient: 'from-rose-950 via-red-950 to-black',
    particleColor: 'rgba(251, 113, 133, 0.4)'
  },
  Melancholy: {
    base: '#020617',
    accent: '#38bdf8', // Sky 400
    background: 'bg-slate-950',
    text: 'text-slate-50',
    secondary: 'text-slate-400',
    gradient: 'from-slate-950 via-gray-950 to-black',
    particleColor: 'rgba(56, 189, 248, 0.3)'
  },
  Dreams: {
    base: '#0f0518',
    accent: '#c084fc', // Purple 400
    background: 'bg-violet-950',
    text: 'text-purple-50',
    secondary: 'text-purple-300',
    gradient: 'from-violet-950 via-fuchsia-950 to-black',
    particleColor: 'rgba(192, 132, 252, 0.4)'
  },
  Nature: {
    base: '#021204',
    accent: '#4ade80', // Green 400
    background: 'bg-green-950',
    text: 'text-emerald-50',
    secondary: 'text-emerald-300',
    gradient: 'from-green-950 via-teal-950 to-black',
    particleColor: 'rgba(74, 222, 128, 0.3)'
  },
  Reflective: {
    base: '#0c0a09',
    accent: '#a8a29e', // Stone 400
    background: 'bg-stone-950',
    text: 'text-stone-50',
    secondary: 'text-stone-400',
    gradient: 'from-stone-950 via-neutral-950 to-black',
    particleColor: 'rgba(168, 162, 158, 0.3)'
  },
  Longing: {
    base: '#080c18',
    accent: '#818cf8', // Indigo 400
    background: 'bg-indigo-950',
    text: 'text-indigo-50',
    secondary: 'text-indigo-300',
    gradient: 'from-blue-950 via-indigo-950 to-black',
    particleColor: 'rgba(129, 140, 248, 0.4)'
  }
};