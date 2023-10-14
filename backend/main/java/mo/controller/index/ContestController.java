package mo.controller.index;

import mo.core.Result;

public interface ContestController {
    /**
     * 查询竞赛
     *
     * @param page     页码
     * @param per_page 每页数量
     * @return
     */
    Result contests(String page, String per_page);

    /**
     * 查询指定竞赛
     *
     * @param contestId 竞赛Id
     * @return
     */
    Result contest(Integer contestId);

    /**
     * 用户是否参与竞赛
     *
     * @param contestId 竞赛Id
     * @return
     */
    Result hasAccess(Integer contestId);
}
