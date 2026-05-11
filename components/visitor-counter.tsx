'use client';

export function VisitorCounter() {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            margin: 0; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            background: transparent; 
            color: #737373; /* neutral-500 */
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; 
            font-size: 10px; 
            text-transform: uppercase;
            letter-spacing: 0.05em;
          } 
          a { 
            color: #737373; 
            text-decoration: none; 
            margin-top: 4px;
            transition: color 0.2s ease;
          }
          a:hover {
            color: #f5f5f5; /* optic-white */
          }
        </style>
      </head>
      <body>
        <script type="text/javascript" src="https://www.free-counters.org/count/jxoh"></script><br>
        <a href='https://www.versicherungen.at/krankenversicherung-oesterreich-auslaender/' target="_blank">Krankenversicherung Österreich Ausländer</a> 
        <script type='text/javascript' src='https://www.whomania.com/ctr?id=a3d7674909f31527581c5a82c3a1c04bca47028e'></script>
      </body>
    </html>
  `;
  
  return (
    <div className="w-full flex justify-center py-12 border-t border-neutral-900 mt-24 opacity-50 hover:opacity-100 transition-opacity duration-300">
      <iframe 
        srcDoc={htmlContent} 
        width="300" 
        height="60" 
        className="border-none bg-transparent overflow-hidden"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        title="Visitor Counter"
        scrolling="no"
      />
    </div>
  );
}
