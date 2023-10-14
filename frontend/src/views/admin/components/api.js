import axios from "axios/index";


axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

export default {
    name: 'Api',

    /**
     * 查询用户
     * @param page 页码
     * @param per_page 每页数量
     * @param jwt token
     */
    getUsersByPagePer_Page(page, per_page, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/users?page=" + page + "&per_page=" + per_page,
            method: 'get',
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 查询用户
     * @param page 页码
     * @param per_page 每页数量
     * @param jwt token
     */
    getUsersByisDisabledPagePer_Page(isDisabled, page, per_page, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/disabled/" + isDisabled + "/users?page=" + page + "&per_page=" + per_page,
            method: 'get',
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 根据页码查询竞赛集
     * @param page
     * @param per_page
     * @param jwt
     */
    getContestsByPagePer_PageAndCreator(page, per_page, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contests?page=" + page + "&per_page=" + per_page,
            method: 'get',
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 根据竞赛Id查询竞赛
     * @param contest_id 竞赛Id
     * @param jwt 令牌
     */
    getContestByContestId(contest_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 查询题目
     * @param page 页码
     * @param per_page 每页数量
     * @param jwt token
     */
    getProblemsByPagePer_Page(page, per_page, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/problems?page=" + page + "&per_page=" + per_page,
            method: 'get',
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 查询指定公开级别和自己创建的题目
     * @param page 页码
     * @param per_page 每页数量
     * @param resType 结果类型
     * @param defunct 公开级别
     * @param jwt 令牌
     */
    getProblemsByPagePer_PageAndDefunt(page, per_page, resType, defunct, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/defunct/" + defunct + "/problems?page=" + page + "&per_page=" + per_page + "&resType=" + resType,
            method: 'get',
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 根据竞赛Id查询题目集
     * @param page 页码
     * @param per_page 每页数量
     * @param contest_id 竞赛Id
     * @param jwt token
     */
    getContestProblemsByPageAndContestId(page, per_page, contest_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id + "/problems?page=" + page + "&per_page=" + per_page,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 查询制定Id题目
     * @param problem_id
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    findProblemByProblemId(problem_id, jwt) {
        return axios({
            url: '/api-oj/api-oj/admin/problem/' + problem_id,
            method: 'get',
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 根据关键字查找相似用户
     * @param keycode
     * @param jwt
     */
    findSimilarUserByKeycode(keycode, jwt) {
        return axios({
            url: '/api-oj/api-oj/admin/user?keycode=' + keycode,
            method: 'get',
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 查询公开题目集
     */
    findPublicProblemsByPage(page, per_page) {
        return axios({
            url: "/api-oj/api-oj/problems/defunct/1?page=" + page + "&per_page=" + per_page,
            method: "get",
        })
    },

    /**
     * 根据题目Id查询标签集合
     * @param problem_id
     * @returns {AxiosPromise}
     */
    findTagsByProblemId(problem_id) {
        return axios({
            url: "/api-oj/api-oj/tags/problem/" + problem_id,
            method: "get",
        });
    },

    /**
     * 将指定Id的题目添加至指定Id的竞赛
     * @param contest_id 比赛Id
     * @param problem_id 题目Id
     * @param jwt token
     * @constructor
     */
    addPublicProblemToContest(contest_id, problem_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id + "/problem/" + problem_id,
            method: "post",
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 将指定题目从指定比赛中删除
     * @param contest_id 竞赛Id
     * @param problem_id 题目Id
     * @param jwt 令牌
     * @constructor
     */
    deleteProblemFromContest(contest_id, problem_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id + "/problem/" + problem_id,
            method: "delete",
            headers: {
                "jwt": jwt,
            }
        });
    },


    /**
     * 创建题目
     * @param problem 题目实体
     * @param tags 标签
     * @param testcase_id 测试用例文件夹名称
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    createNewProblem(problem, tags, testcase_id, jwt) {
        let params = new URLSearchParams();
        params.append("problem", JSON.stringify(problem));
        params.append("tags", tags == null ? null : JSON.stringify(tags));
        params.append("testCaseId", testcase_id);
        return axios({
            url: "/api-oj/api-oj/admin/problem",
            method: "post",
            data: params,
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 创建题目
     * @param problem 题目实体
     * @param tags 标签
     * @param testcase_id 测试用例文件夹名称
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    createNewProblemToContest(contest_id, problem, tags, testcase_id, jwt) {
        let params = new URLSearchParams();
        params.append("problem", JSON.stringify(problem));
        params.append("tags", tags == null ? null : JSON.stringify(tags));
        params.append("testCaseId", testcase_id);
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id + "/problem",
            method: "post",
            data: params,
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 更新公告
     * @param news 公告实体
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    updateNews(news, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/news",
            method: "put",
            dataType: "json",
            data: JSON.stringify(news),
            headers: {
                "jwt": jwt,
                "Content-Type": "application/json;charset-UTF-8",
            }
        });
    },

    /**
     * 删除指定题目
     * @param problem_id 题目Id
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    deleteProblemByProblemId(problem_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/problem/" + problem_id,
            method: "delete",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 删除指定用户
     * @param user_id 用户Id
     * @param jwt 令牌
     */
    deleteUserByUserId(user_id, jwt) {
        return axios({
            url: '/api-oj/api-oj/admin/user/' + user_id,
            method: "delete",
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 更新用户信息
     * @param user json格式的用户
     * @param jwt 令牌
     */
    updateUser(user, jwt) {
        return axios({
            url: '/api-oj/api-oj/admin/user',
            data: JSON.stringify(user),
            method: "put",
            headers: {
                "jwt": jwt,
                "Content-Type": "application/json"
            }
        })
    },

    /**
     * 查询指定竞赛的题目集
     * @param contest_id 竞赛Id
     * @param page 页码
     * @param per_page 每页数量
     * @param jwt 令牌
     */
    findContestUser(contest_id, page, per_page, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id + "/users?page=" + page + "&per_page=" + per_page,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 查询指定竞赛的公告
     * @param contest_id 竞赛Id
     * @param page 页码
     * @param per_page 每页数量
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    findContestNews(contest_id, page, per_page, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id + "/news?page=" + page + "&per_page=" + per_page,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 创建公告
     * @param news 公告实体
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    createNews(news, jwt) {
        let params = new URLSearchParams();
        params.append("news", JSON.stringify(news));
        return axios({
            url: "/api-oj/api-oj/admin/news",
            method: "post",
            data: params,
            headers: {
                "jwt": jwt,
            }
        });
    },


    /**
     * 删除公告
     * @param news_id 公告Id
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    deleteNews(news_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/news/" + news_id,
            method: "delete",
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 更新题目
     * @param problem 题目实体
     * @param tags 标签
     * @param testcase_id 测试用例文件夹名称
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    updateProblem(problem, tags, testcase_id, jwt) {
        let problemTagTestCase = {
            "problem": problem,
            "tags": tags == null || tags.length == 0 ? null : tags,
            "testCaseId": testcase_id,
        };
        return axios({
            url: "/api-oj/api-oj/admin/problem",
            method: "put",
            data: JSON.stringify(problemTagTestCase),
            dataType: "json",
            headers: {
                "jwt": jwt,
                "Content-Type": "application/json;charset-UTF-8",
            }
        })
    },

    /**
     * 查询公告
     * @param page 页码
     * @param per_page 每页数量
     * @param jwt 令牌
     */
    findNews(page, per_page, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/news?page=" + page + "&per_page=" + per_page,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 创建新竞赛
     * @param contest 竞赛实体
     * @param jwt 令牌
     */
    createNewContest(contest, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest",
            method: "post",
            data: JSON.stringify(contest),
            headers: {
                "jwt": jwt,
                "Content-Type": "application/json;charset-UTF-8",
            }
        });
    },

    /**
     * 更新竞赛
     * @param contest 竞赛实体
     * @param contest_id 竞赛Id
     * @param jwt 令牌
     */
    updateContest(contest, contest_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id,
            data: JSON.stringify(contest),
            method: "put",
            dataType: "json",
            headers: {
                "jwt": jwt,
                "Content-Type": "application/json;charset-UTF-8",
            }
        })
    },

    /**
     * 修改题目禁用状态
     * @param problem_id 题目
     * @param state 题目状态
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    disableProblem(problem_id, state, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/problem/" + problem_id + "/state?state=" + state,
            method: "put",
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 修改公告禁用状态
     * @param news_id 公告
     * @param state 题目状态
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    disableNews(news_id, state, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/news/" + news_id + "/state?state=" + state,
            method: "put",
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 根据管理员Id查询创建的竞赛
     * @param jwt 令牌
     */
    getContestByCreator(page, per_page, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/creator/contest?page=" + page + "&per_page=" + per_page,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 查询指定竞赛申请人数
     * @param contest_id 竞赛Id
     * @param jwt 令牌
     */
    getApplyNumsByContestId(contest_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id + "/contest_apply_num",
            method: "get",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 查询指定竞赛的申请
     * @param contest_id 竞赛Id
     * @param jwt 令牌
     */
    getContestApplyByContestId(page, per_page, contest_id, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contest_id + "/contest_apply?page=" + page + "&per_page=" + per_page,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        });
    },

    /**
     * 更新指定申请
     * @param id 申请Id
     * @param status 状态
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    updateContestApplyStatus(id, status, jwt) {
        return axios({
            url: "/api-oj/api-oj/admin/contest_apply/" + id + "?status=" + status,
            method: "put",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 查询指定竞赛中的提交
     * @param contestId 竞赛Id
     * @param jwt 令牌
     * @param page 页码
     * @param per_page 每页数量
     */
    getSolutionsByContestId(contestId, jwt, page, per_page) {
        return axios({
            url: "/api-oj/api-oj/admin/contest/" + contestId + "/solutions?page=" + page + "&per_page=" + per_page,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        })
    }
}
