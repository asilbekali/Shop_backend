export declare class MailService {
    private transporter;
    sendEmail(email: string, subject: string, text: string): Promise<any>;
}
