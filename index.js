const uaup = require('./uaup-js');

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

    appName: "app", //[Required] The Name of the app archive and the app folder.
    appDirectory: __dirname,

    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
    disableLaunch: true,
};

uaup.Update(updateOptions);