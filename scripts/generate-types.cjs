const fs = require('fs');
const path = require('path');

// Caminho para o diretório base (mude para o seu diretório desejado)
const baseDir = '../src/components';

// Função para criar diretório se não existir
function createDirectoryIfNotExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Pasta criada: ${dirPath}`);
    }
}

// Função para escrever o template de módulo no arquivo index.ts
function writeModuleDeclaration(filePath, componentName, indexFilePath) {
    const template = `
/**
 * 
 * ${componentName} is a Vue component.
 * 
 * [Component](./${filePath})
 * 
 * @module ${componentName.toLowerCase()}
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - ${componentName}**
 *
 * _${componentName} is a Vue component._
 * --- ---
 * [Vue Based Component](./${filePath})
 * @group Component
 *
 */
declare class ${componentName} extends ClassComponent<any, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        ${componentName}: GlobalComponentConstructor<${componentName}>;
    }
}

export default ${componentName};
`;
    fs.appendFileSync(indexFilePath, template);
    console.log(`Template para ${componentName} adicionado ao ${indexFilePath}`);
}

// Função para processar cada subdiretório
function processSubdirectory(subDirPath) {
    const typesDirPath = path.join(subDirPath, 'types');
    const indexFilePath = path.join(typesDirPath, 'index.ts');

    // Verifica se a pasta 'types' existe, se não, cria
    createDirectoryIfNotExists(typesDirPath);

    // Verifica e processa cada arquivo .vue no subdiretório
    fs.readdirSync(subDirPath).forEach(file => {
        if (path.extname(file) === '.vue') {
            const componentName = path.basename(file, '.vue');
            writeModuleDeclaration(file, componentName, indexFilePath);
        }
    });
}

// Função principal para percorrer todos os subdiretórios
function processDirectories(baseDir) {
    fs.readdirSync(baseDir, { withFileTypes: true }).forEach(dirent => {
        if (dirent.isDirectory()) {
            const subDirPath = path.join(baseDir, dirent.name);
            processSubdirectory(subDirPath);
        }
    });
}

// Executa o script
processDirectories(baseDir);
