const uaup = require('./uaup-js');
const fkill = require('fkill');
// const readline = require('readline-sync');

const APP = 'app';

//This is Optional
const defaultStages = {
    Checking: "Verificando...", // When Checking For Updates.
    Found: "Atualização encontrada!",  // If an Update is Found.
    NotFound: "Atualização não encontrada.", // If an Update is Not Found.
    Downloading: "Baixando...", // When Downloading Update.
    Unzipping: "Instalando...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalizando...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Abrindo..." // When Launching the Application.
};

const updateOptions = {
    gitRepo: "d2b_updater", // [Required] Your Repo Name
    gitUsername: "roneymaia",  // [Required] Your GitHub Username.

    appName: APP, //[Required] The Name of the app archive and the app folder.
    appDirectory: __dirname,
    tempDirectory: __dirname + '\\tmp',

    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
    disableLaunch: true,
};

// readline.question('\nA atualizacao fechara todas as janelas Diablo II e o Launcher.\nCaso deseje prosseguir pressione qualquer tecla, caso nao, apenas feche essa janela!');

(async () => {
  try { await fkill(['Game.exe'], { force: true }); } catch {}
  try { await fkill(['D2BLauncher.exe'], { force: true }); } catch {}
  setTimeout(() => uaup.Update(updateOptions), 2000);
})()