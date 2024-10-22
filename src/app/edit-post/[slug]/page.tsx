import { AddEditPost } from '@/components'
import type { ServerSideComponentProps } from '@/common-types/types'
import { getAllTags, getSinglePost } from '@/lib/post-utils'

type EditPostPageProps = ServerSideComponentProps<{ slug: string }>

export default async function AddPostPage({ params }: EditPostPageProps) {
  const post = getSinglePost(params.slug)
  const tags = getAllTags()
  const updatedPostData = post
    ? {
        ...post,
        tags: post.tags.map(tag => tag.id)
      }
    : post

  return (
    <div>
      <AddEditPost tags={tags} defaultValues={updatedPostData} />
    </div>
  )
}
