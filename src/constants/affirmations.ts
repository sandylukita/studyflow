export const AFFIRMATIONS = [
  "You're showing up. That's what matters.",
  "Small steps are still progress.",
  "Your effort is seen and valued.",
  "You're building something real.",
  "This moment counts.",
  "You're stronger than you think.",
  "Consistency beats perfection.",
  "You're exactly where you need to be.",
  "Every session makes a difference.",
  "You're not rushing. You're growing.",
  "Your calm is your superpower.",
  "You're doing better than you know.",
  "Trust the process. Trust yourself.",
  "One breath at a time.",
  "You're creating new patterns.",
  "This is your journey. Own it.",
  "You're learning to trust yourself again.",
  "Your presence is your power.",
  "You're rewriting old stories.",
  "Every show-up is a victory.",
];

export const getRandomAffirmation = (): string => {
  return AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)];
};
