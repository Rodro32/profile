import { Router } from "express";
import { ProjectRoutes } from "../modules/project/project.route";
import { UserRoute } from "../modules/users/users.route";
import { SkillRoutes } from "../modules/skills/skills.route";
import { MessageRoutes } from "../modules/message/message.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { AuthRoutes } from "../modules/auth/auth.route";

const router = Router();

const moduleRoutes = [
  {
    path:'/project',
    route:ProjectRoutes,
  },  
  {
    path:'/user',
    route:UserRoute,
  },
  {
    path:'/skill',
    route:SkillRoutes,
  }, 
  {
    path:'/message',
    route:MessageRoutes,
  }, 
  {
    path:'/admin',
    route:AdminRoutes,
  },
  {
    path:'/auth',
    route:AuthRoutes,
  },
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;