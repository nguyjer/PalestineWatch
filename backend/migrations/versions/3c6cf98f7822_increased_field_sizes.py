from alembic import op
import sqlalchemy as sa

# Revision identifiers, used by Alembic.
revision = '3c6cf98f7822'
down_revision = 'ca0d68d4e154'
branch_labels = None
depends_on = None

def upgrade():
    # Drop foreign key constraints on the support_groups table
    op.drop_constraint('news_supportGroupId_fkey', 'news', type_='foreignkey')
    op.drop_constraint('countries_supportGroupId_fkey', 'countries', type_='foreignkey')

    # Now drop the support_groups table
    op.drop_table('support_groups')

def downgrade():
    # Recreate the support_groups table (if necessary)
    op.create_table(
        'support_groups',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(length=255), nullable=False),
        # Add other columns as needed
    )

    # Recreate the foreign key constraints
    op.create_foreign_key('news_supportGroupId_fkey', 'news', 'support_groups', ['supportGroupId'], ['id'])
    op.create_foreign_key('countries_supportGroupId_fkey', 'countries', 'support_groups', ['supportGroupId'], ['id'])
