@RestController
@RequestMapping("/user")
// /api/user
public class UserController {

    private JWTServices jwtServices;
    private UserDao userDao;

    @Autowired
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Autowired
    public void setJwtServices(JWTServices jwtServices) {
        this.jwtServices = jwtServices;
    }

    // /api/user/
    // Controller methods are mapped to a 'path', one or more request 'method's, one or more
    // content-types ('consumes') and will 'produces' whatever is declared.
    // Controller (annotated with @ResponseBody) methods can return any type of object
    // and Spring will convert the object to the format declared by 'produces' that matches
    // the accepts header of the Request or will set the status to 415 (Unsupported Media Type)
    @RequestMapping(path="", method= {RequestMethod.GET}, produces = MediaType.APPLICATION_JSON_VALUE)
    public EmployeeProfileDTO getCurrentUser() {
        EmployeeProfileDTO profile = new EmployeeProfileDTO();
        profile.setDepartment(Department.TRAINING);
        profile.setEmail("august.duet@revature.com");
        profile.setFirstName("August");
        profile.setLastName("Duet");

        return profile;
    }


    // /api/user/login
    // Spring sets the context for the controller method
    // any object in context can be injected into a controller method
    // PoJos, Services, HttpServletRequest, HttpServletResponse, HttpSession, ...
    @PostMapping(path="/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void loginUser(@RequestBody EmployeeLoginDTO employee, HttpServletResponse resp) {
        // we would go through an authentication workflow and if everything was good,
        // we then use the jwtservice to create out token
        EmployeeBean emp = userDao.getByEmail(employee.getEmail());

        if(emp != null) {
            if(emp.getPassword().equals(employee.getPassword())) {
                String token = jwtServices.build(emp);
                System.out.println(token);

                //create and add the cookie to the response
                Cookie userCookie = new Cookie("user", token);
                userCookie.setHttpOnly(true);

                resp.addCookie(userCookie);
                return;
            }
        }
        resp.setStatus(401);
        return;
    }

}
