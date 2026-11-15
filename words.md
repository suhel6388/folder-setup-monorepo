- workspace = > Overall apps

pnpm add @repo/ui@workspace:* --filter client   

pnpm --filter client dev     
(use to run app frm global)

pnpm add -Dw jest jest-environment-jsdom ts-jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event