module.exports = {
  apps: [
    {
      name: "portfolio-cms",
      script: "npm",
      args: "start",
      env: {
        PORT: 3001,
        NODE_ENV: "production",
      }
    }
  ]
}