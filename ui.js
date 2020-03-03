module.exports = api => {
  api.describeConfig({
    id: 'com.danielbhagen.vue-cli-plugin-amplify',
    name: 'AWS Amplify',
    description: 'AWS Amplify plugin for VueJS',
    link: 'https://github.com/dbhagen/vue-cli-plugin-amplify',
    files: {
      // vue.config.js
      vue: {
        js: ['vue.config.js']
      },
      amplify: {
        json: ['amplify/team-provider-info.json']
      }
    },
    onRead: ({ data, cwd }) => ({
      tabs: [
        {
          id: 'tab1',
          label: 'My tab',
          // Optional
          icon: 'settings_applications',
          prompts: [
            {
              type: 'input',
              name: 'first_name',
              message: "What's your first name",
              default: () => {
                return 'test'
                // return api;
              }
            }
          ]
        },
        {
          id: 'tab2',
          label: 'My other tab',
          prompts: [
            // Prompt objects
          ]
        }
      ]
    }),
    onWrite: ({ prompts, answers, data, files, cwd, api }) => {
      // ...
    }
  })
}
