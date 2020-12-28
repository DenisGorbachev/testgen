describe('Quadratic equation test suite', async function () {
  const context = await getContext()
  const stories = await getStories()
  for await (const story of stories) {
    test(story.name, async function () {
      // FIXME: Optimize the story by preloading the database?
      await story.setup(context)
      const snapshotOld = await getSnapshot()
      const result = await story.run(context)
      const snapshotNew = await getSnapshot()
      const diff = await getSnapshotDiff(snapshotOld, snapshotNew)
      await story.assert(result, diff)
    })
  }
})
