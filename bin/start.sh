launch=$(cat configuration/$NODE_ENV.env)
eval $launch ts-node -r tsconfig-paths/register index.ts