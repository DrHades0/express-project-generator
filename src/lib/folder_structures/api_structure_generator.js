const fs = require("fs");
const path = require("path");
const IndexCreator = require("./IndexCreator");
module.exports = class ApiStructureGenerator{
	/*
	take two arguments path and names
	and create a complete folder structure with your index files in all folders
	*/
	constructor(folderPath, folderName){
		this.folderPath = folderPath;
		this.folderName = folderName;
		this.folderDir  = path.join(this.folderPath, this.folderName);

		this.srcFolderPath = path.join(this.folderDir,"src");
		this.apiFolderPath = path.join(this.srcFolderPath, "api");
		this.CreateFolder();
		this.CreateSrcFolder();
		this.appPath = this.apiFolderPath
	}


	CreateFolder(){
		/* create base project folder */
		fs.mkdirSync(`${this.folderDir}`);
	}

	CreateSrcFolder(){
		/*
			Create Src folder with Core and Api folders
		*/
		fs.mkdirSync(this.srcFolderPath);
		this.CreateCoreFolder();
		this.CreateApiFolder();

		this.CreateIndexFile();
	}

	CreateCoreFolder(){
		/*
			Create core folder
		*/
		const coreFolderPath = path.join(this.srcFolderPath, "core");
		fs.mkdirSync(coreFolderPath);
		new IndexCreator(coreFolderPath, "Core");
	}
	CreateApiFolder(){
		/*
			Create api, routes, middlewares, scripts and controller folder and
			create app.js
		*/
		fs.mkdirSync(this.apiFolderPath);
		this.CreateRoutesFolder();
		this.CreateMiddlewaresFolder();
		this.CreateServicesFolder();
		this.CreateApiServicesFolder();
		this.CreateExpressApp();
	}
	CreateApiServicesFolder(){
		const apiServicesFolder_path = path.join(this.apiFolderPath, "apiServices");
		fs.mkdirSync(apiServicesFolder_path);
		new IndexCreator(apiServicesFolder_path, "ApiServices");

	}
	CreateRoutesFolder(){
		/*
		 	Make routes folder with indexRouter
		*/
		const routeFolderPath = path.join( this.apiFolderPath, "routes");
		fs.mkdirSync(routeFolderPath);

		new IndexCreator(routeFolderPath, "Routes");

	}

	CreateMiddlewaresFolder(){
		/*
			Create a middleware folder in api folder
		*/
		const middlewareRoutePath = path.join( this.apiFolderPath, "middlewares");
		fs.mkdirSync(middlewareRoutePath);

		new IndexCreator(middlewareRoutePath, "Middlewares");

	}

	CreateServicesFolder(){
		const serviceFolderPath = path.join(this.apiFolderPath, "services");
		fs.mkdirSync(serviceFolderPath);
		new IndexCreator(serviceFolderPath, "Services");

	}
	CreateExpressApp(){
	}

	CreateIndexFile(){
		/*
			Create a index.js file in src folder
		*/
		new IndexCreator(this.srcFolderPath, "");

	}

}
