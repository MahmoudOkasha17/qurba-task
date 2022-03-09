import MenuPost from '@modules/home/components/feed-posts/components/menu-post/menu-post.component';
import SharedMenuPost from '@modules/home/components/feed-posts/components/shared-menu-post/shared-menu-post.component';
import SharedPost from '@modules/home/components/feed-posts/components/shared-post/shared-post.component';

function postMatcher(post, index) {
  if (post.type === 'MENU_POST') {
    return <MenuPost key={index} post={post} />;
  } else if (post.type === 'SHARED_MENU') {
    return <SharedMenuPost key={index} post={post} />;
  } else if (post.type === 'SHARED_POST') {
    return <SharedPost key={index} post={post} />;
  }
}

export default postMatcher;
