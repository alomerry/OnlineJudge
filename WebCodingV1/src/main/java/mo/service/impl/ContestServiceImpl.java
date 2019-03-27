package mo.service.impl;

import mo.core.Permission;
import mo.core.PermissionManager;
import mo.dao.ContestMapper;
import mo.entity.po.Contest;
import mo.exception.ServiceException;
import mo.service.ContestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ContestServiceImpl implements ContestService {

    private static final Logger logger = LoggerFactory.getLogger(ContestServiceImpl.class);

    @Resource
    private ContestMapper contestMapper;

    @Override
    public List<Contest> findContestsByPageAndPerPage(Integer page, Integer per_page) {
        return contestMapper.findContestByPageAndPerPage((page - 1) * per_page, per_page);
    }

    @Override
    public List<Contest> findContestsByPageAndDefunct(Integer page, Integer per_page, Integer[] defunct) {
        return contestMapper.findContestsByPageAndDefunct((page - 1) * per_page, per_page, getDefunct(defunct));
    }

    @Override
    public List<Contest> findContestsByPageFromAdminPrivilege(Integer page, Integer per_page, String rightstr, Integer userId) {
        if (PermissionManager.isAdmin(rightstr)) {
            logger.info("用户权限不足，查询失败");
            throw new ServiceException();
        }

        Permission[] contestLevel = {Permission.Contest_organizer};
        if (PermissionManager.isOneLegalAdmin(contestLevel, rightstr)) {
            return contestMapper.findContestByPageAndPerPage((page - 1) * per_page, per_page);
        } else {
            return contestMapper.findContestByPageAndDefunctWithOwnContest((page - 1) * per_page, per_page, "(0)", userId);
        }
    }

    /**
     * 将指定公开级别的竞赛集属性整合成string
     *
     * @param defunct 公开级别
     * @return 整合公开级别
     */
    private String getDefunct(Integer[] defunct) {
        StringBuilder sbf = new StringBuilder();
        boolean x = true;
        for (Integer i : defunct) {
            if (x) {
                sbf.append("(").append(i);
                x = false;
            } else {
                sbf.append(",").append(i);
            }
        }
        return sbf.append(")").toString();
    }
}