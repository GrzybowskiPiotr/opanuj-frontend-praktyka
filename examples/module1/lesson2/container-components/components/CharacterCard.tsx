export function CharacterCard({
  character,
}: {
  character: { name: string; image: string };
}) {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </>
  );
}
