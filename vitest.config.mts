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
        statements: 87,
        branches: 80,
        functions: 82,
        lines: 87
      },
      include: ['lib/**/*.ts'],
      exclude: ['test/**/*.ts'],
      reporter: ['text', 'lcov'],
      all: true,
    },
  },
})
