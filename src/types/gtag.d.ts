declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent' | 'set',
      targetId: string | Date | 'default' | 'update' | Record<string, unknown>,
      config?: {
        [key: string]: unknown;
        send_to?: string;
        value?: number;
        currency?: string;
        transaction_id?: string;
        custom_parameters?: {
          [key: string]: unknown;
        };
        gclid?: string;
        campaign_source?: string;
        campaign_medium?: string;
        campaign_name?: string;
        campaign_term?: string;
        campaign_content?: string;
        page_path?: string;
        page_location?: string;
        page_referrer?: string;
        conversion_linker?: boolean;
        allow_enhanced_conversions?: boolean;
        send_page_view?: boolean;
        enhanced_measurement?: {
          scrolls?: boolean;
          outbound_clicks?: boolean;
          site_search?: boolean;
          video_engagement?: boolean;
          file_downloads?: boolean;
          form_interactions?: boolean;
        };
        // Consent Mode v2
        ad_storage?: 'granted' | 'denied';
        ad_user_data?: 'granted' | 'denied';
        ad_personalization?: 'granted' | 'denied';
        analytics_storage?: 'granted' | 'denied';
        wait_for_update?: number;
        region?: string[];
        ads_data_redaction?: boolean;
        url_passthrough?: boolean;
      }
    ) => void;
  }
}

export {};