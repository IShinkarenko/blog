import { AddEditPost } from '@/components'
import { getAllTags } from '@/lib/post-utils'

export default async function AddPostPage() {
  const tags = getAllTags()

  return (
    <div>
      <AddEditPost tags={tags} />
    </div>
  )
}
