// app/user/BackButton.js
'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      className="buttons"
      style={{ borderRadius: '4px 0 0 4px' , width:"20%"}}
      onClick={handleBack}
    >
      Volver al home
    </button>
  );
}
