"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main>
      <div>Что-то пошло не так</div>
      <div>{JSON.stringify(error)}</div>
    </main>
  );
}
