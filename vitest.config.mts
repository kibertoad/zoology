import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    environment: 'node',
    passWithNoTests: true,
    reporters: ['verbose'],
    coverage: {
      thresholds: {
        statements: 90,
        branches: 75,
        functions: 76,
        lines: 90
      },
      include: ['lib/**/*.ts'],
      exclude: [],
      reporter: ['lcov', "text", "html"],
      all: true,
    },
  },
})
