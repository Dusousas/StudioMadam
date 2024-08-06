import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Studio Madam</title>
      <meta name="keywords" content="manicure, pedicure, unhas, cuidados com unhas, esmaltação, corte de cabelo, penteado, penteado para festas, penteado para noivas, penteado para formatura, corte feminino, corte masculino, tratamento capilar, hidratação, coloração de cabelo" />
      <meta name="description" content="Studio Madam oferece serviços de Manicure, Pedicure, Corte de Cabelo, Penteados, Dia de Noiva e é Especialista em Noivas. Profissionais experientes para garantir sua beleza e bem-estar." />
      <meta name="title" content="Studio Madam - Manicure, Pedicure, Cabelos, Penteados e Especialista em Noivas" />
      <meta name="author" content="You on - Landing Pages" />
      <link rel="icon" href="/icon.png" />

      {/* Marcellus */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Marcellus&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+CL:wght@100..400&family=Righteous&display=swap" rel="stylesheet" />
      {/* Montserrat */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+CL:wght@100..400&family=Righteous&display=swap" rel="stylesheet" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
