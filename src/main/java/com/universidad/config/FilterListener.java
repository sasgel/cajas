/**
 * 
 */
package com.universidad.config;

import java.io.IOException;

import javax.faces.context.FacesContext;
import javax.faces.event.PhaseEvent;
import javax.faces.event.PhaseId;
import javax.faces.event.PhaseListener;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author JoseLuisE
 *
 */
public class FilterListener implements PhaseListener {

	private static final long serialVersionUID = 1L;
	private final Logger logger = LoggerFactory.getLogger(FilterListener.class);
	
	@Override
	public void afterPhase(PhaseEvent event) {
	}

	@Override
	public void beforePhase(final PhaseEvent event) {

		FacesContext facesContext = FacesContext.getCurrentInstance();
		if (!facesContext.getPartialViewContext().isAjaxRequest() || facesContext.getRenderResponse()) {
			return;
		} else {

			final HttpServletRequest request = HttpServletRequest.class
					.cast(facesContext.getExternalContext().getRequest());

			HttpSession session = request.getSession(false);
			if (!session.isNew() && facesContext.getExternalContext().getUserPrincipal() != null) {
				logger.info("Sessión activa");
			} else {
				String ajaxRequestHeader = request.getHeader("X-Requested-With");
				if ("XMLHttpRequest".equals(ajaxRequestHeader)) {

					final String redirect = facesContext.getExternalContext().getRequestContextPath()
							+ request.getServletPath();
					try {
						facesContext.getExternalContext().redirect(redirect);
					} catch (final IOException e) {
						logger.info(e.getMessage());
					}
				}
			}

		}
	}

	@Override
	public PhaseId getPhaseId() {
		return PhaseId.RESTORE_VIEW;
	}
}