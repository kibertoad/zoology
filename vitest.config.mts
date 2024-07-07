import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    environment: 'node',
    passWithNoTests: false,
    reporters: ['verbose'],
    coverage: {
      thresholds: {
        statements: 90,
        branches: 75,
        functions: 75,
        lines: 90
      },
      include: ['lib/**/*.ts'],
      exclude: ['test/**/*.ts'],
      reporter: ['text', 'lcov'],
      all: true,
    },
  },
})
