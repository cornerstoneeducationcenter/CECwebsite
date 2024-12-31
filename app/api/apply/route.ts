import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      studentName,
      dateOfBirth,
      gender,
      gradeLevel,
      parentName,
      parentEmail,
      parentPhone,
      address,
      previousSchool,
    } = body;

    if (!studentName || !parentName || !parentEmail || !parentPhone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to school administration
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@cornerstoneeducation.ac.ke',
      subject: 'New Student Application',
      html: `
        <h2>New Student Application</h2>
        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${studentName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Grade Level:</strong> ${gradeLevel}</p>
        <p><strong>Previous School:</strong> ${previousSchool || 'N/A'}</p>
        
        <h3>Parent/Guardian Information</h3>
        <p><strong>Name:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${parentEmail}</p>
        <p><strong>Phone:</strong> ${parentPhone}</p>
        <p><strong>Address:</strong> ${address}</p>
      `,
    });

    // Send confirmation email to parent
    await sendEmail({
      to: parentEmail,
      subject: 'Application Received - Cornerstone Education Centre',
      html: `
        <h2>Application Received</h2>
        <p>Dear ${parentName},</p>
        <p>We have received your application for ${studentName} to join Cornerstone Education Centre.</p>
        <p>Our admissions team will review your application and contact you within 5 working days.</p>
        <p>If you have any questions in the meantime, please don't hesitate to contact us.</p>
        <p>Best regards,<br>Cornerstone Education Centre Admissions Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
