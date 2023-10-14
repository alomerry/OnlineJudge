package mo.controller.admin;

import mo.core.Result;

public interface AdminContestApplyController {

    /**
     * 查询竞赛申请
     *
     * @param contest_id 竞赛Id
     * @param page       页码
     * @param per_page   每页数量
     * @return
     */
    Result contestApply(Integer contest_id, String page, String per_page);

    /**
     * 查询指定竞赛参赛人数
     *
     * @param contest_id 竞赛Id
     * @return
     */
    Result applyNumber(Integer contest_id);

    /**
     * 更新申请状态
     *
     * @param id  申请Id
     * @param val 状态
     * @return
     */
    Result operateApply(Integer id, Integer val);
}