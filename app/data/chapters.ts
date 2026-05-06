export interface Chapter {
  id: string;
  title: string;
  latexCode: string;
  pdfPath: string;
}

export const chapters: Chapter[] = [
  {
    id: "chapter-1",
    title: "1. Fejezet - Alapok",
    latexCode: `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{amsmath}
\\usepackage{graphicx}

\\title{LaTeX Alapok}
\\author{Workshop}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Bevezetés}
A LaTeX egy dokumentumkészítő rendszer, amely különösen alkalmas tudományos és műszaki dokumentumok létrehozására.

\\section{Alapvető parancsok}
\\begin{itemize}
\\item \\texttt{\\\\textbf{szöveg}} - félkövér szöveg
\\item \\texttt{\\\\textit{szöveg}} - dőlt szöveg
\\item \\texttt{\\\\section{cím}} - szakasz létrehozása
\\end{itemize}

\\section{Matematikai képletek}
Képletek írása:
\\begin{equation}
E = mc^2
\\end{equation}

\\end{document}`,
    pdfPath: "/test.pdf"
  },
  {
    id: "chapter-2", 
    title: "2. Fejezet - Táblázatok",
    latexCode: `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{booktabs}

\\title{LaTeX Táblázatok}
\\author{Workshop}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Táblázatok készítése}
Egyszerű táblázat:

\\begin{table}[h]
\\centering
\\begin{tabular}{|l|c|r|}
\\hline
\\textbf{Oszlop 1} & \\textbf{Oszlop 2} & \\textbf{Oszlop 3} \\\\
\\hline
Adat 1 & Adat 2 & Adat 3 \\\\
Adat 4 & Adat 5 & Adat 6 \\\\
\\hline
\\end{tabular}
\\caption{Példa táblázat}
\\label{tab:example}
\\end{table}

\\section{Booktabs csomag}
Professzionális táblázatok:

\\begin{table}[h]
\\centering
\\begin{tabular}{lcr}
\\toprule
\\textbf{Bal} & \\textbf{Közép} & \\textbf{Jobb} \\\\
\\midrule
Első & Második & Harmadik \\\\
Negyedik & Ötödik & Hatodik \\\\
\\bottomrule
\\end{tabular}
\\caption{Booktabs táblázat}
\\end{table}

\\end{document}`,
    pdfPath: "/test.pdf"
  },
  {
    id: "chapter-3",
    title: "3. Fejezet - Képek és ábrák", 
    latexCode: `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{graphicx}
\\usepackage{float}

\\title{LaTeX Képek és ábrák}
\\author{Workshop}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Képek beillesztése}
Kép beillesztése a graphicx csomaggal:

\\begin{figure}[H]
\\centering
% \\includegraphics[width=0.8\\textwidth]{kep.png}
\\caption{Példa kép}
\\label{fig:example}
\end{figure}

Hivatkozás a képre: \\ref{fig:example}.

\\section{Képek elrendezése}
Több kép egymás mellett:

\\begin{figure}[H]
\\centering
\\begin{minipage}{0.45\\textwidth}
\\centering
% \\includegraphics[width=\\textwidth]{kep1.png}
\\caption{Első kép}
\\end{minipage}
\\hfill
\\begin{minipage}{0.45\\textwidth}
\\centering
% \\includegraphics[width=\\textwidth]{kep2.png}
\\caption{Második kép}
\\end{minipage}
\\end{figure}

\\end{document}`,
    pdfPath: "/test.pdf"
  },
  {
    id: "chapter-4",
    title: "4. Fejezet - Matematika",
    latexCode: `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{amsmath}
\\usepackage{amssymb}

\\title{LaTeX Matematika}
\\author{Workshop}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Egyszerű képletek}
Soron belüli képlet: $E = mc^2$.

Különálló képlet:
\\[a^2 + b^2 = c^2\\]

\\section{Komplex képletek}
Integrál:
\\begin{equation}
\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)
\\end{equation}

Több soros egyenletrendszer:
\\begin{align}
x + y &= 5 \\\\
2x - y &= 1
\\end{align}

\\section{Speciális szimbólumok}
Görög betűk: $\\alpha, \\beta, \\gamma, \\delta$

Halmazok: $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}$

Vektorok: $\\vec{v} = (v_1, v_2, v_3)$

\\end{document}`,
    pdfPath: "/test.pdf"
  },
  {
    id: "chapter-5",
    title: "5. Fejezet - Hivatkozások",
    latexCode: `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{hyperref}

\\title{LaTeX Hivatkozások}
\\author{Workshop}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Belső hivatkozások}
Címkék és hivatkozások:

\\section{Első szakasz}
\\label{sec:first}
Ez az első szakasz, lásd \\ref{sec:second}.

\\section{Második szakasz}
\\label{sec:second}
Visszahivatkozás az első szakaszra: \\ref{sec:first}.

\\section{Külső hivatkozások}
Weboldal hivatkozás: \\url{https://www.latex-project.org/}

Email cím: \\href{mailto:example@email.com}{example@email.com}

\\section{Bibliográfia}
Cikk hivatkozás \\cite{example2023}.

\\begin{thebibliography}{9}
\\bibitem{example2023}
Example Author.
\\textit{Example Article Title}.
Journal Name, 2023.
\\end{thebibliography}

\\end{document}`,
    pdfPath: "/test.pdf"
  }
];
