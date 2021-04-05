const loader = ["|","/","-","\\","|"];
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + loader[i] + '   ');
  }, 100 + i * 200);
}