// 'use client'; // for Next.js

import { useActionState } from 'react';

async function submitAction(prevState, formData) {
  const name = formData.get('name');
  return { message: `Hello, ${name}!` };
}

export default function NameForm() {
  const [state, formAction] = useActionState(submitAction, { message: '' });

  return (
    <form action={formAction}>
      <input type="text" name="name" placeholder="Your name" required />
      <button type="submit">Say Hello</button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
