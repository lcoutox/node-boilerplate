const fs = require('fs')

const MINIMUM_COVERAGE = 0 // Defina a cobertura mínima desejada aqui

const lcovFileContent = fs.readFileSync('coverage/lcov.info', 'utf-8')
const lines = lcovFileContent.split('\n')

let totalLines = 0
let coveredLines = 0

lines.forEach(line => {
  if (line.startsWith('DA:')) {
    totalLines++
    if (!line.endsWith(',0')) {
      coveredLines++
    }
  }
})

const coveragePercentage = (coveredLines / totalLines) * 100

if (coveragePercentage < MINIMUM_COVERAGE) {
  console.error(`Cobertura mínima de teste não atingida. Cobertura atual: ${coveragePercentage.toFixed(2)}%`)
  process.exit(1) // Sair com código de erro
} else {
  console.log(`Cobertura de teste válida. Cobertura atual: ${coveragePercentage.toFixed(2)}%`)
  process.exit(0) // Sair com sucesso
}
