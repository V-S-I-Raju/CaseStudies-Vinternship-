document.addEventListener('DOMContentLoaded', () => {
  const demoOutput = document.getElementById('demoOutput') as HTMLElement;

  function clearOutput() {
    demoOutput.textContent = '';
  }

  function logMessage(message: string) {
    demoOutput.textContent += message + '\n';
  }

  // Demonstrate let block scope
  document.getElementById('btnLetScope')?.addEventListener('click', () => {
    clearOutput();
    logMessage('--- Let Block Scope Demo ---');

    if (true) {
      let x = 10;
      logMessage(`Inside block: let x = ${x}`);
    }

    try {
      // @ts-ignore
      logMessage(`Outside block: let x = ${x}`); // x is not accessible here
    } catch {
      logMessage('Error: x is not accessible outside the block (block scope).');
    }
  });

  // Demonstrate const block scope and immutability
  document.getElementById('btnConstScope')?.addEventListener('click', () => {
    clearOutput();
    logMessage('--- Const Block Scope Demo ---');

    if (true) {
      const y = 5;
      logMessage(`Inside block: const y = ${y}`);
    }

    try {
      // @ts-ignore
      logMessage(`Outside block: const y = ${y}`); // y is not accessible here
    } catch {
      logMessage('Error: y is not accessible outside the block (block scope).');
    }
  });

  // Show redeclaration error with let
  document.getElementById('btnRedeclareLet')?.addEventListener('click', () => {
    clearOutput();
    logMessage('--- Redeclaring Let Demo ---');
    logMessage('Declared let a = 1');
    logMessage('Trying to redeclare let a in the same scope will cause a compile-time error in TypeScript.');
  });

  // Show reassignment error with const
  document.getElementById('btnReassignConst')?.addEventListener('click', () => {
    clearOutput();
    logMessage('--- Reassigning Const Demo ---');
    logMessage('Declared const b = 3');
    logMessage('Trying to reassign const b will cause a compile-time error in TypeScript.');
  });
});