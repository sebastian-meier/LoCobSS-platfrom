import Index from '../../views/pages/admin/view.svelte'
import Questions from '../../views/pages/admin/questions/list.svelte'
import QuestionDetail from '../../views/pages/admin/questions/detail.svelte'
import Users from '../../views/pages/admin/users/list.svelte'
import UserDetail from '../../views/pages/admin/users/detail.svelte'
import NotFound from '../../views/pages/404/404.svelte'

export const routes = {
  '/': Index,
  '/questions': Questions,
  '/question/:id': QuestionDetail,
  '/users': Users,
  '/user/:id': UserDetail,
  '/404': NotFound,
  '*': NotFound,
}
