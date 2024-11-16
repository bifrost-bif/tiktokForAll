import React, { useState } from 'react';
import { Typography, Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import TikTokEmbed from '../components/TikTokEmbed';
import './Home.css';

const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    
    const competitionRules = [
        {
            rule: "1. منع الدعم المتبادل :",
            explanation: "إذا قام شخص بإرسال هدية إلى لاعب، ثم أعاد اللاعب إرسال هدية لهذا الشخص أثناء بث آخر أو ضيف، فهذا دعم متبادل. في هذه الحالة، لا يجوز للشخص نفسه دعم اللاعب مرة أخرى في المبارات المسقبلة. الهدف هو منع التلاعب وضمان نزاهة النتائج."
        },
        {
            rule: "2. التعامل مع الداعمين الجدد أو المجهولين:",
            explanation: "يتم مراقبة الحسابات الجديدة أو المشبوهة لتجنب التلاعب، مثل الحسابات التي تم إنشاؤها مؤخرًا أو التي لا تحتوي على سجل واضح. الهدف هو ضمان نزاهة العملية التنافسية ومنع الحسابات الوهمية من التأثير على النتائج."
        },
        {
            rule: "3. إظهار هوية الداعمين (المخفين):",
            explanation: "يجب أن تكون هوية الداعمين مرئية بوضوح في قائمة الداعمين أثناء المباريات. الحسابات المخفية أو غير الواضحة لا يمكن قبول دعمها لتجنب الشبهات."
        },
        {
            rule: "4. الحد من المبالغة في التبرعات:",
            explanation: "يُمنع تقديم تبرعات ضخمة إذا كان الفرق في النقاط كبيرًا جدًا (مثال: 10K مقابل 2M). الهدف هو الحفاظ على توازن المنافسة ومنع النتائج الغير عادلة."
        },
        {
            rule: "5. احترام المنافسين والداعمين:",
            explanation: "يجب احترام جميع اللاعبين وداعميهم. السلوكيات المستفزة أو غير المحترمة تؤدي إلى عقوبات فورية. الهدف هو خلق بيئة تنافسية إيجابية وصحية."
        }
    ];

    return (
        <div className="home-container">
            {/* */}
            <Dialog open={isPopupOpen} onClose={() => {}} disableBackdropClick>
                <DialogTitle style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', direction: 'rtl' }}><br/>
                    <Typography variant="h5" style={{ fontWeight: 'bold', color: '#1976D2' }}>
                        قواعد المنافسة
                    </Typography>
                </DialogTitle>
                <DialogContent style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', textAlign: 'right' }}>
                    <Box style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                        {competitionRules.map((item, index) => (
                            <Box key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                                <Typography variant="body1" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
                                    {item.rule}
                                </Typography>
                                <Typography variant="body2" style={{ color: '#555', lineHeight: '1.8' }}>
                                    {item.explanation}
                                </Typography>
                            </Box>
                        ))}
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => setIsPopupOpen(false)}
                            style={{
                                marginTop: '20px',
                                backgroundColor: '#3498db',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                padding: '10px',
                                borderRadius: '25px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
                            }}
                        >
                            موافق
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>

            {/* Section de la vidéo gagnante - À la une */}
            <section className="featured-video-section">
                <Typography variant="h4" className="featured-title">
                    <span className="highlight">A LA UNE <br/></span>
                    <span className="highlightDes">Vidéo gagnنة - Journée 2</span>
                </Typography>
                <TikTokEmbed videoId="7433744840464043295" />
            </section>
            <br />
        </div>
    );
};

export default Home;
